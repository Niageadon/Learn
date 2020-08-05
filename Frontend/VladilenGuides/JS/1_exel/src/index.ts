import './scss/index.scss'
import Excel from '@/components/excel/Excel.ts'
import Header from "@/components/header/Header.ts";
import Toolbar from "@/components/toolbar/Toolbar.ts";
import Formula from "@/components/formula/Formula.ts";
import Table from "@/components/table/Table.ts";


const excel = new Excel('#app', {
	components: [Header, Toolbar, Formula, Table]
})
excel.render()
