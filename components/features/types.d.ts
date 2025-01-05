export type FeaturesCardData = {
  desc: string;
  title: string;
  preview: React.ReactNode;
};

export interface FeaturesCardProps {
  data: FeaturesCardData;
}

export interface FeaturesCardCTAProps {
  children: React.ReactNode;
}
