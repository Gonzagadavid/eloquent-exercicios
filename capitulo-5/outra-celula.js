/* 
Outra célula
Implemente uma célula do tipo  StretchCell(inner, width, height)  que se adeque a interface da célula da tabela
descrita anteriormente neste capítulo. Ela deve envolver outra célula (como  UnderlinedCell  faz) e assegurar que a
célula resultante tem pelo menos a largura ( width ) e altura ( height ) especificada, mesmo se a célula interior for
naturalmente menor.
*/

  function rowHeights (rows) {
    return rows.map(function (row) {
      return row.reduce(function (max, cell) {
        return Math.max(max, cell.minHeight())
      }, 0)
    })
  }
  
  function colWidths (rows) {
    return rows[0].map(function (_, i) {
      return rows.reduce(function (max, row) {
        return Math.max(max, row[i].minWidth())
      }, 0)
    })
  }
  
  function drawTable (rows) {
    const heights = rowHeights(rows)
    const widths = colWidths(rows)
    function drawLine (blocks, lineNo) {
      return blocks.map(function (block) {
        return block[lineNo]
      }).join(' ')
    }
    function drawRow (row, rowNum) {
      const blocks = row.map(function (cell, colNum) {
        return cell.draw(widths[colNum], heights[rowNum])
      })
      return blocks[0].map(function (_, lineNo) {
        return drawLine(blocks, lineNo)
      }).join('\n')
    }
    return rows.map(drawRow).join('\n')
  }
  
  function repeat (string, times) {
    let result = ''
    for (let i = 0; i < times; i++) { result += string }
    return result
  }
  function TextCell (text) {
    this.text = text.split('\n')
  }
  TextCell.prototype.minWidth = function () {
    return this.text.reduce(function (width, line) {
      return Math.max(width, line.length)
    }, 0)
  }
  TextCell.prototype.minHeight = function () {
    return this.text.length
  }
  TextCell.prototype.draw = function (width, height) {
    const result = []
    for (let i = 0; i < height; i++) {
      const line = this.text[i] || ''
      result.push(line + repeat(' ', width - line.length))
    }
    return result
  }
  
  function UnderlinedCell (inner) {
    this.inner = inner
  };
  UnderlinedCell.prototype.minWidth = function () {
    return this.inner.minWidth()
  }
  UnderlinedCell.prototype.minHeight = function () {
    return this.inner.minHeight() + 1
  }
  UnderlinedCell.prototype.draw = function (width, height) {
    return this.inner.draw(width, height - 1)
      .concat([repeat('-', width)])
  }
  
  function dataTable (data) {
    const keys = Object.keys(data[0])
    const headers = keys.map(function (name) {
      return new UnderlinedCell(new TextCell(name))
    })
    const body = data.map(function (row) {
      return keys.map(function (name) {
        return new TextCell(String(row[name]))
      })
    })
    return [headers].concat(body)
  }
 
    function RTextCell(text) {
      TextCell.call(this, text);
    }
    RTextCell.prototype = Object.create(TextCell.prototype);
    RTextCell.prototype.draw = function(width, height) {
      var result = [];
      for (var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(repeat(" ", width - line.length) + line);
      }
      return result;
    };
  
    function dataTable(data) {
      var keys = Object.keys(data[0]);
      var headers = keys.map(function(name) {
        return new UnderlinedCell(new TextCell(name));
      });
      var body = data.map(function(row) {
        return keys.map(function(name) {
          var value = row[name];
          // This was changed:
          if (typeof value == "number")
            return new RTextCell(String(value));
          else
            return new TextCell(String(value));
        });
      });
      return [headers].concat(body);
    }
  
    function StretchCell(inner, width, height) {
      this.inner = inner;
      this.width = width;
      this.height = height;
    }
    
    StretchCell.prototype.minWidth = function() {
      return Math.max(this.width, this.inner.minWidth());
    };
    StretchCell.prototype.minHeight = function() {
      return Math.max(this.height, this.inner.minHeight());
    };
    StretchCell.prototype.draw = function(width, height) {
      return this.inner.draw(width, height);
    };
    
    var sc = new StretchCell(new TextCell("abc"), 1, 2);
    console.log(sc.minWidth());
    // → 3
    console.log(sc.minHeight());
    // → 2
    console.log(sc.draw(3, 2));
    // → ["abc", "   "]