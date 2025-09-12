export interface Property {
    id: number;
    category?: string; 
    title: string;
    city: string;
    country: string;
    price: string;
    rating: string;
    img: string;
    badge?: string; 
  }

  export interface Props{
    open: boolean;
    onClose: () => void;
    step: "checkin" | "checkout" | "who" | "clicked" | null;
    setStep: (step: "checkin" | "checkout" | "who" | "clicked" | null) => void;
  }