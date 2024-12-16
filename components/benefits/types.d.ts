type BenefitsCardList = { title: string; desc: string }[];

export interface BenefitsCardProps {
  video: string;
  heading: string;
  subheading: string;
  list: BenefitsCardList;
}

export interface BenefitsCardHeaderProps {
  heading: string;
  subheading: string;
}

export interface BenefitsCardListProps {
  list: BenefitsCardList;
}
