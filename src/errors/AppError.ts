interface IAppErrorDTO{
  errorMessage: string;
  statusCode?: number;
  requiredFields?: string[]
}

class AppError{
  readonly errorMessage: string;
  readonly statusCode: number;
  readonly requiredFields?: string[];

  constructor({errorMessage, statusCode = 400, requiredFields}: IAppErrorDTO){
    this.errorMessage = errorMessage;
    this.statusCode = statusCode;
    if(requiredFields !== undefined){
      this.requiredFields = requiredFields;
    }
  }
}


export { AppError }