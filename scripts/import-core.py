"""Extract exact XLSX values without editing the source workbook."""
import zipfile,xml.etree.ElementTree as E,json,sys,hashlib,collections
from pathlib import Path
source=Path(sys.argv[1]);n={'s':'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
with zipfile.ZipFile(source) as z:
 ss=[''.join(e.itertext()) for e in E.fromstring(z.read('xl/sharedStrings.xml'))] if 'xl/sharedStrings.xml' in z.namelist() else []
 rows=[]
 for row in E.fromstring(z.read('xl/worksheets/sheet1.xml')).findall('.//s:sheetData/s:row',n):
  cells={}
  for c in row:
   col=''.join(filter(str.isalpha,c.attrib['r']));idx=0
   for ch in col:idx=idx*26+ord(ch)-64
   v=c.find('s:v',n); t=c.get('t');value=ss[int(v.text)] if t=='s' else ''.join(c.find('s:is',n).itertext()) if t=='inlineStr' else v.text if v is not None else ''
   if t not in ['s','inlineStr','str'] and value!='':value=int(value) if float(value).is_integer() else float(value)
   cells[idx-1]=value
  rows.append(cells)
 headers=[rows[0][i] for i in range(len(rows[0]))]
 words=[{h:r.get(i,'') for i,h in enumerate(headers)} for r in rows[1:]]
assert len(words)==1000 and len({w['id'] for w in words})==1000
assert collections.Counter(int(w['zone']) for w in words)=={i:200 for i in range(1,6)}
assert all(int(w['learning_rank'])==i and int(w['zone'])==(i-1)//200+1 for i,w in enumerate(words,1))
payload={'version':'1.1','source':source.name,'sha256':hashlib.sha256(source.read_bytes()).hexdigest(),'words':words}
Path('dist/core1000.json').write_text(json.dumps(payload,ensure_ascii=False,indent=2))
Path('dist/core1000.js').write_text('const CORE_MASTER = '+json.dumps(payload,ensure_ascii=False)+';\n')
print('1000 exact rows imported; POS:',dict(collections.Counter(w['part_of_speech'] for w in words)))
