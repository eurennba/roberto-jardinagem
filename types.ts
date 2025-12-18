
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
