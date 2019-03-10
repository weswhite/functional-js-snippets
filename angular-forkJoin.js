@Injectable()
export class MyService {
  makeRequest(value: string, delayDuration: number) {
    // simulate http request
    return of(`Complete: ${value}`).pipe(
      delay(delayDuration)
    );
  }
}

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2>forkJoin Example</h2>
      <ul>
        <li> {{propOne}} </li>
        <li> {{propTwo}} </li>
        <li> {{propThree}} </li>
      </ul>
    </div>
  `,
})
export class App {
  public propOne: string;
  public propTwo: string;
  public propThree: string;
  constructor(private _myService: MyService) {}

  ngOnInit() {
    // simulate 3 requests with different delays
    forkJoin(
      this._myService.makeRequest('Request One', 2000),
      this._myService.makeRequest('Request Two', 1000),
      this._myService.makeRequest('Request Three', 3000)
    )
    .subscribe(([res1, res2, res3]) => {
      this.propOne = res1;
      this.propTwo = res2;
      this.propThree = res3;
    });
  }
}
