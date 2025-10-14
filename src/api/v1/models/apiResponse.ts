// Api Success Response//
//@template T - Type of the data being returned//

export interface ApiResponse<T> {
  success: true;
  message: string;
  data: T;
}
