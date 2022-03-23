import * as fs from 'fs';
import { performance } from 'perf_hooks';

function withNewAssigns(params: { id: number; text: string }) {
  const { id, text } = params;

  return {
    id,
    text,
  };
}

(() => {
  const result = [];

  performance.mark('start');

  for (let i = 0; i < 1 * 1000 * 1000 * 50; i++) {
    const res = withNewAssigns({ id: i, text: `${i}` });

    result.push(res);
  }

  performance.mark('end');

  console.log(performance.measure('test', 'start', 'end'));

  console.log(process.memoryUsage());

  fs.writeFileSync('./res', JSON.stringify(result.length));
})();
