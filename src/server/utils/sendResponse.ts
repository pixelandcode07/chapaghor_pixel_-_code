import { NextResponse } from 'next/server';

type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  data: T;
};

export const sendResponse = <T>(data: TResponse<T>): NextResponse => {
  return NextResponse.json(
    {
      success: data.success,
      message: data.message || 'Success',
      meta: data.meta,
      data: data.data,
    },
    {
      status: data.statusCode,
    }
  );
};