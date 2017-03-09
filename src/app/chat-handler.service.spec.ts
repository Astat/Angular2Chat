import { TestBed, inject } from '@angular/core/testing';

import { ChatHandlerService } from './chat-handler.service';

describe('ChatHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatHandlerService]
    });
  });

  it('should ...', inject([ChatHandlerService], (service: ChatHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
