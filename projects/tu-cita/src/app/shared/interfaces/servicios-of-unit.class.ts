export class ServiciosOfUnit {
  serviceTypeId: string;
  serviceName: string;
  duration: number;

  public constructor(partial) {
    this.serviceName = partial.serviceName ? partial.serviceName : null;
    this.serviceTypeId = partial.servicioId ? partial.servicioId : null;
    this.duration = partial.duration ? partial.duration : null;
  }

  public static parseFromApi(partial): ServiciosOfUnit {
    return new ServiciosOfUnit(partial);
  }
}
