export class Reservacion{
  constructor(
    public _id: String,
  public usuario: String,
  public hotel: String,
  public fechaEntrada: String,
  public fechaSalida: String,
  public habitacion: String
  ){}
}
