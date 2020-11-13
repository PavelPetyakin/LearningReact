export class CustomerDirections {
  static path = "/:page?";
  private _home = "";
  private _projects = "projects";
  private _contacts = "contacts";

  constructor(private readonly path: string = "") {}

  get home(): string {
    return this._home;
  }
  get projects(): string {
    return this._projects;
  }
  get contacts(): string {
    return this._contacts;
  }
}

export interface IMenuElement {
  title: string;
  link: string;
}
const cusDirections = new CustomerDirections();
export const menuList: IMenuElement[] = [
  {
    title: "Главная",
    link: cusDirections.home,
  },
  {
    title: "Проекты",
    link: cusDirections.projects,
  },
  {
    title: "Контакты",
    link: cusDirections.contacts,
  },
];

class Directions {
  customer = CustomerDirections.path;
  admin = "/admin";
}

export const directions = new Directions();