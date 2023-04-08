import mongoose from 'mongoose';
import { Request, Response, NextFunction } from 'express';

interface JSONResponse {
  success: boolean;
  message: string;
  data?: Record<string, unknown>;
}

type TypedResponse<T> = Omit<Response, 'json' | 'status'> & {
  json(data: T): TypedResponse<T>;
} & { status(code: number): TypedResponse<T> };

type AppResponse = TypedResponse<JSONResponse>;

export interface ExtendedRequest extends Request {
  user?: IUser;
}
declare global {
  type ObjectId= mongoose.Types.ObjectId;
  type Controller = (req: ExtendedRequest, res: AppResponse, next: NextFunction) => any;
}