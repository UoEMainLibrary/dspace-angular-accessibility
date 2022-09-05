import { Injectable } from '@angular/core';
import { RemoteDataBuildService } from '../cache/builders/remote-data-build.service';
import { ObjectCacheService } from '../cache/object-cache.service';
import { DSpaceObject } from '../shared/dspace-object.model';
import { DSPACE_OBJECT } from '../shared/dspace-object.resource-type';
import { HALEndpointService } from '../shared/hal-endpoint.service';
import { RequestService } from './request.service';
import { IdentifiableDataService } from './base/identifiable-data.service';
import { dataService } from './base/data-service.decorator';

@Injectable()
@dataService(DSPACE_OBJECT)
export class DSpaceObjectDataService extends IdentifiableDataService<DSpaceObject> {
  protected linkPath = 'dso';

  // interpolate uuid as query parameter
  protected constructIdEndpoint = (endpoint: string, resourceID: string): string => {
    return endpoint.replace(/{\?uuid}/, `?uuid=${resourceID}`);
  };

  constructor(
    protected requestService: RequestService,
    protected rdbService: RemoteDataBuildService,
    protected objectCache: ObjectCacheService,
    protected halService: HALEndpointService,
  ) {
    super(
      requestService, rdbService, objectCache, halService,
    );
  }
}
