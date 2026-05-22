import { Schema, model, models } from 'mongoose';
import { IBanner, BannerModel } from './banner.interface';

const bannerSchema = new Schema<IBanner>(
  {
    title: { 
      type: String, 
      required: true, 
      trim: true 
    },
    imageUrl: { 
      type: String, 
      required: true 
    },
    link: { 
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

export const Banner = models.Banner || model<IBanner, BannerModel>('Banner', bannerSchema);