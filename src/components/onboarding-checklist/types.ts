
export interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  timeEstimate: string;
  completed: boolean;
  section: string;
  link?: string;
}

export interface OnboardingChecklistProps {
  onProgressUpdate: (completed: number, total: number) => void;
  industry?: string;
}
