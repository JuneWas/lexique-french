"""Build locally authored example sentences without modifying vocabulary masters."""
import json
from pathlib import Path

root = Path(__file__).resolve().parents[1]
examples = {}
for source in sorted((root / 'content/examples').glob('*.tsv')):
    for line_number, line in enumerate(source.read_text().splitlines(), 1):
        fields = line.split('\t')
        if len(fields) != 3:
            raise ValueError(f'{source.name}:{line_number}: expected ID, French, Japanese')
        key, french, japanese = fields
        if source.name.startswith('core-'):
            key = 'core:' + key
        if key in examples or not french.strip() or not japanese.strip():
            raise ValueError(f'{source.name}:{line_number}: duplicate or empty example')
        examples[key] = {'fr': french, 'ja': japanese}
expected = {'core:' + str(i) for i in range(1, 1001)}
expected |= {f'lac-{i:03}' for i in range(1, 21)}
expected |= {f'fou-{i:03}' for i in range(21, 101)}
if set(examples) != expected:
    raise ValueError(f'Example IDs differ: {set(examples) ^ expected}')
output = '// Learning examples authored for this app; not quotations.\nconst WORD_EXAMPLES = ' + json.dumps(examples, ensure_ascii=False, indent=2) + ';\n'
(root / 'dist/examples.js').write_text(output)
print(f'Built {len(examples)} French/Japanese example pairs')
