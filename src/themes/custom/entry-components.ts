import {
  JournalIssueComponent
} from './app/entity-groups/journal-entities/item-pages/journal-issue/journal-issue.component';
import {
  JournalVolumeComponent
} from './app/entity-groups/journal-entities/item-pages/journal-volume/journal-volume.component';
import { PublicationComponent } from './app/item-page/simple/item-types/publication/publication.component';
import { UntypedItemComponent } from './app/item-page/simple/item-types/untyped-item/untyped-item.component';

export const ENTRY_COMPONENTS = [
  JournalIssueComponent,
  JournalVolumeComponent,
  PublicationComponent,
  UntypedItemComponent,
];
