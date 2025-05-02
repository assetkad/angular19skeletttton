import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  combineLatest,
  delay,
  filter,
  from,
  interval,
  map,
  merge,
  mergeMap,
  of,
  reduce,
  take,
  zip,
} from 'rxjs';

function getRandomNumber(min: number, max: number): number {
  const ceiledMin = Math.ceil(min);
  const flooredMax = Math.floor(max);
  const result = Math.floor(
    Math.random() * (flooredMax - ceiledMin) + ceiledMin
  );
  console.log(result, 'Random number');
  return result;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'rxjs';

  price = 4880889;

  ngOnInit(): void {
    // const obs = from([1, 2, 3]).pipe(
    //   map((value) => {
    //     return value * getRandomNumber(1, 3);
    //   }),
    //   filter((value) => value % 2 !== 0)
    // );
    // obs.subscribe({
    //   next(value) {
    //     console.log(value);
    //   },
    //   complete() {
    //     console.log('obs finished');
    //   },
    // });
    // const obs = interval(1000);
    // obs.pipe(take(3)).subscribe({
    //   next(value) {
    //     console.log(value);
    //   },
    // });
    // const orders = from([
    //   { id: 1, total: 100 },
    //   { id: 2, total: 250 },
    //   { id: 3, total: 50 },
    // ]);
    // orders
    //   .pipe(
    //     reduce((highestOrder, currentOrder) =>
    //       highestOrder.total > currentOrder.total ? highestOrder : currentOrder
    //     )
    //   )
    //   .subscribe({
    //     next(value) {
    //       console.log('The highest sum: ', value);
    //     },
    //   });
    // const numbers = from([1, 2]);
    // numbers
    //   .pipe(
    //     mergeMap((num) =>
    //       interval(1000).pipe(
    //         take(2),
    //         map((i) => `Число ${num}-${i}`)
    //       )
    //     )
    //   )
    //   .subscribe((result) => console.log(result));
    // const factoryA$ = interval(3000).pipe(map((i) => `Деталь ${i + 1}`));
    // const factoryB$ = interval(2000).pipe(
    //   map((i) => `Запрос на деталь ${i + 1}`)
    // );
    // zip(factoryA$, factoryB$)
    //   .pipe(take(3))
    //   .subscribe(([detail, request]) => {
    //     console.log(`${request} укомплектован с ${detail}`);
    //   });
    // const factoryA$ = interval(6000).pipe(map((i) => `Деталь ${i + 1}`));
    // // Цех В (запросы каждые 2 секунды)
    // const factoryB$ = interval(2000).pipe(
    //   map((i) => `Запрос на деталь ${i + 1}`)
    // );
    // // Каждый новый запрос использует актуальное состояние деталей
    // combineLatest([factoryA$, factoryB$])
    //   .pipe(take(4))
    //   .subscribe(([detail, request]) => {
    //     console.log(`${request} укомплектован с ${detail}`);
    //   });
    // const stream1$ = of('A').pipe(delay(1500));
    // const stream2$ = of('B').pipe(delay(1));
    // const stream3$ = of('C').pipe(delay(1));
    // merge(stream1$, stream2$, stream3$, 2).subscribe(console.log);
  }
}
