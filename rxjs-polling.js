import { of } from 'rxjs';
import { delay, tap, mergeMap, repeat } from 'rxjs/operators';

const fakeDelayedRequest = () => of(new Date()).pipe(delay(1000));

const display = response => {
  document.open();
  document.write(response);
};

const poll = of({}).pipe(
  mergeMap(_ => fakeDelayedRequest()),
  tap(display),
  delay(3000),
  repeat()
);

poll.subscribe();
