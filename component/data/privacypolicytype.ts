export interface CookieType {
  name: string;
  description: string;
}
 
export interface RetentionPeriod {
  dataType: string;
  period: string;
}
 
export interface UserRight {
  right: string;
  description: string;
}
 
export interface BrowserSetting {
  browser: string;
  path: string;
}
 
export interface ContactInfo {
  company: string;
  email: string;
  website: string;
  address: string;
  responseTime: string;
}
 
export interface OptOut {
  intro: string;
  methods: string[];
}
 
 
export interface DescriptionSubsection {
  id: string;
  title: string;
  description: string;
  points?: never;
  cookieTypes?: never;
  note?: never;
}
 
export interface PointsSubsection {
  id: string;
  title: string;
  description: string;
  points: string[];
  cookieTypes?: never;
  note?: string;
}
 
export interface CookieSubsection {
  id: string;
  title: string;
  intro: string;
  cookieTypes: CookieType[];
  points?: never;
  description?: never;
  note?: string;
}
 
export interface SimpleSubsection {
  id: string;
  title: string;
  points: string[];
  description?: never;
  cookieTypes?: never;
  note?: never;
}
 
export type Subsection =
  | SimpleSubsection
  | DescriptionSubsection
  | PointsSubsection
  | CookieSubsection;
 
 
interface BaseSection {
  id: number;
  title: string;
  note?: string;
  closing?: string;
}
 
export interface PointsSection extends BaseSection {
  intro: string;
  points: string[];
  subsections?: never;
  rights?: never;
  retentionPeriods?: never;
  browserSettings?: never;
  optOut?: never;
  contact?: never;
}
 
export interface SubsectionsSection extends BaseSection {
  intro: string;
  subsections: Subsection[];
  points?: never;
  rights?: never;
  retentionPeriods?: never;
  browserSettings?: never;
  optOut?: never;
  contact?: never;
}
 
export interface RetentionSection extends BaseSection {
  intro: string;
  retentionPeriods: RetentionPeriod[];
  points?: never;
  subsections?: never;
  rights?: never;
  browserSettings?: never;
  optOut?: never;
  contact?: never;
}
 
export interface RightsSection extends BaseSection {
  intro: string;
  rights: UserRight[];
  points?: never;
  subsections?: never;
  retentionPeriods?: never;
  browserSettings?: never;
  optOut?: never;
  contact?: never;
}
 
export interface MarketingSection extends BaseSection {
  intro: string;
  points: string[];
  optOut: OptOut;
  subsections?: never;
  rights?: never;
  retentionPeriods?: never;
  browserSettings?: never;
  contact?: never;
}
 
export interface CookiePreferencesSection extends BaseSection {
  intro: string;
  browserSettings: BrowserSetting[];
  points?: never;
  subsections?: never;
  rights?: never;
  retentionPeriods?: never;
  optOut?: never;
  contact?: never;
}
 
export interface ContactSection extends BaseSection {
  intro: string;
  contact: ContactInfo;
  points?: never;
  subsections?: never;
  rights?: never;
  retentionPeriods?: never;
  browserSettings?: never;
  optOut?: never;
}
 
export type PolicySection =
  | PointsSection
  | SubsectionsSection
  | RetentionSection
  | RightsSection
  | MarketingSection
  | CookiePreferencesSection
  | ContactSection;
 
 
export interface PrivacyPolicy {
  company: string;
  tagline: string;
  effectiveDate: string;
  lastUpdated: string;
  intro: string[];
  note: string;
  sections: PolicySection[];
}