class Directions {
  home = "/";
  projects = "/projects";
  contacts = "/contacts";
}

export const directions = new Directions();

export interface IMenuElement {
  title: string;
  link: string;
}

export const menuList: IMenuElement[] = [
  {
    title: "Главная",
    link: directions.home,
  },
  {
    title: "Проекты",
    link: directions.projects,
  },
  {
    title: "Контакты",
    link: directions.contacts,
  },
]
