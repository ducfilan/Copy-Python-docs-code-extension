# Copy-Python-docs-code-extension
Copy code from https://docs.python.org and remove redundant symbols to make it runable directly.

Fix code when copying code from https://docs.python.org that turns:

```python
>>> transposed = []
>>> for i in range(4):
...     # the following 3 lines implement the nested listcomp
...     transposed_row = []
...     for row in matrix:
...         transposed_row.append(row[i])
...     transposed.append(transposed_row)
```

into

```python
transposed = []
for i in range(4):
  # the following 3 lines implement the nested listcomp
  transposed_row = []
  for row in matrix:
      transposed_row.append(row[i])
  transposed.append(transposed_row)
```
in clipboard.

---

## Install

1. Clone the repo
2. Follow the official instruction to load the extension: https://developer.chrome.com/extensions/getstarted#unpacked
