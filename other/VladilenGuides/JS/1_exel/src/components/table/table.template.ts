enum borders {
	start = 65,
	end = 90
}
const toChar = (_, index) => String.fromCharCode(borders.start + index)
const toCol = (col) => `<div class="excel__table-column">${col}</div>`
const toCell = (data: string): string => `<div class="excel__table-cell" contenteditable>${data}</div>`

export function createTable(rowsCount: number, ): string {
	const colsCount = borders.end - borders.start + 1
	const cols = new Array(colsCount).fill('')
		.map(toChar)
		.map(toCol)
		.join('')
	const rows = [createRow(cols)]


	const row = new Array(colsCount).fill('').map(toCell).join('')
	for(let i = 0; i < rowsCount; i++) {
		rows.push(createRow(row))
	}
	return rows.join('')
}

function createRow(content: string) {
	return `
	<div class="excel__table-row">
		<div class="excel__table-row-info"></div>
		<div class="excel__table-row-data">
			${content}
		</div>
	</div>
	`
}

