export interface ReviewItem {
  id: string;
  logo: string;
  name: string;
  position: string;
  text: string;
  image: string;
}

export interface ReviewsData {
  title: string;
  subtitle: string;
  items: ReviewItem[];
}
