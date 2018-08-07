export class Movies {
  constructor (
    public title: string,
    public featured_photo: string,
    public synopsis: string,
    public created_at?: number) {
      this.title = title;
      this.featured_photo = featured_photo;
      this.synopsis = synopsis;
      this.created_at = new Date().getTime();
  }
}
