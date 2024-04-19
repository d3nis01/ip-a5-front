class CustomError extends Error {
  public statusCode: number;
  public errorDetails: any;

  constructor(message: string, statusCode: number = 400, details: any = null) {
    super(message);
    this.statusCode = statusCode;
    this.errorDetails = details;
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export default CustomError;
