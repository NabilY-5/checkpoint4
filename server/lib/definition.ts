export type SkillType = {
  id: number;
  nom: string;
};

export type ProjetType = {
  id: number;
  titre: string;
  description: string;
  image_url: string;
  lien_site: string;
  lien_github: string;
  skills: SkillType[];
};
