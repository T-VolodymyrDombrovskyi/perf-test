import * as fs from 'fs';
import { performance } from 'perf_hooks';

function noNewAssigns(params: { id: number; text: string }) {
  return {
    id: params.id,
    text: params.text,
  };
}

(() => {
  const result = [];

  performance.mark('start');

  for (let i = 0; i < 1 * 1000 * 1000 * 20; i++) {
    result.push(noNewAssigns({ id: i, text: `${i}` }));
  }

  performance.mark('end');

  console.log(performance.measure('test', 'start', 'end'));

  console.log(process.memoryUsage());

  fs.writeFileSync('./res', JSON.stringify(result.length));
})();
