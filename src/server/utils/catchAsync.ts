import { NextRequest, NextResponse } from 'next/server';

type AsyncHandler = (req: NextRequest, ...args: any[]) => Promise<NextResponse>;

export const catchAsync = (fn: AsyncHandler) => {
  return async (req: NextRequest, ...args: any[]): Promise<NextResponse> => {
    try {
      return await fn(req, ...args);
    } catch (error: any) {
      console.error('❌ API Error Encountered:', error);

      // Zod Validation Error Handling
      if (error.name === 'ZodError' || error.errors) {
        return NextResponse.json(
          {
            success: false,
            message: 'Validation Error',
            error: error.errors || error.message,
          },
          { status: 400 }
        );
      }

      // Default Global Error Response
      return NextResponse.json(
        {
          success: false,
          message: error.message || 'Something went wrong!',
        },
        { status: error.statusCode || 500 }
      );
    }
  };
};