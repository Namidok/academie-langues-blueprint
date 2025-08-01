import { navigationTranslations } from './navigationTranslations';
import { homeTranslations } from './homeTranslations';
import { aboutTranslations } from './aboutTranslations';
import { coursesTranslations } from './coursesTranslations';
import { contactTranslations } from './contactTranslations';
import { footerTranslations } from './footerTranslations';

import { Language } from '../types/language';

export const translations: Record<string, Record<Language, string>> = {
  ...navigationTranslations,
  ...homeTranslations,
  ...aboutTranslations,
  ...coursesTranslations,
  ...contactTranslations,
  ...footerTranslations,
};
