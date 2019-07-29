/*
В примере ниже подключены два скрипта small.js и big.js.

Если предположить, что small.js загружается гораздо быстрее, чем big.js – какой выполнится первым?

<script src="big.js"></script>
<script src="small.js"></script>
А вот так?

<script async src="big.js"></script>
<script async src="small.js"></script>
А так?

<script defer src="big.js"></script>
<script defer src="small.js"></script>
*/


  // <script src="big.js"></script> <----------
  // <script src="small.js"></script>
//---------------------------------------------
  // <script async src="big.js"></script>
  // <script async src="small.js"></script> <--
//---------------------------------------------
  // <script defer src="big.js"></script> <----
  // <script defer src="small.js"></script>

