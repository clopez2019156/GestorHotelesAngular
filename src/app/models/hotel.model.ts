export class Hotel{
  constructor(
    public _id: String,
  public nombre: String,
   public direccion: String,
  public administrador: String,
  public habitaciones: [{
        nombreHabitacion: String,
        precio: String,
        disponibilidad: String
    }],
public eventos: [{
        tipoEvento: String,
        fecha: String,
        hora: String
    }]
  ){}
}
