import { Schema, model, models } from 'mongoose';
import bcrypt from 'bcryptjs';
import { TUser, UserModel } from './user.interface';

const userSchema = new Schema<TUser, UserModel>(
  {
    name: { 
      type: String, 
      required: [true, 'Name is required'] 
    },
    email: { 
      type: String, 
      unique: true,
      sparse: true, // নাল বা খালি ভ্যালু থাকলেও ডুপ্লিকেট এরর আটকাবে
      trim: true
    },
    phone: { 
      type: String, 
      unique: true,
      sparse: true, // নাল বা খালি ভ্যালু থাকলেও ডুপ্লিকেট এরর আটকাবে
      trim: true
    },
    password: { 
      type: String, 
      required: true, 
      select: false 
    },
    role: { 
      type: String, 
      enum: ['user', 'admin'], 
      default: 'user' 
    },
    avatar: { 
      type: String,
      default: ''
    },
    isActive: { 
      type: Boolean, 
      default: true 
    },
  },
  { 
    timestamps: true 
  }
);

// Mongoose Pre-validate hook: নিশ্চিত করবে যেন ইমেইল বা ফোন নম্বরের যেকোনো একটি অবশ্যই থাকে
userSchema.pre('validate', function () {
  // next() রিমুভ করে সরাসরি Error থ্রো করা হলো
  if (!this.email && !this.phone) {
    throw new Error('Either email or phone number is required for registration.');
  }
});

// Password Hashing Middleware
userSchema.pre('save', async function () {
  // async ফাংশনে next() এর কোনো দরকার নেই, সরাসরি return করলেই হবে
  if (!this.isModified('password')) return;
  this.password = await bcrypt.hash(this.password as string, 12);
});

// Static Method: ইমেইল অথবা ফোন যেকোনো একটি দিয়ে ইউজার চেক করার কুয়েরি
userSchema.statics.isUserExists = async function (identifier: string) {
  return await this.findOne({
    $or: [{ email: identifier }, { phone: identifier }]
  }).select('+password');
};

userSchema.statics.isPasswordMatched = async function (plainTextPassword, hashedPassword) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

export const User = models.User || model<TUser, UserModel>('User', userSchema);