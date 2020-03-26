export class Athlete {
  public name: string;
  public firstname: string;
  public country: string;
  public pb :number;
  public sb: number;
  
  constructor(name: string, firstname: string, country: string, pb?: number, sb?: number){
    this.name = name;
    this.firstname = firstname;
    this.country = country;
    this.pb = pb;
    this.sb = sb;
  }
}
