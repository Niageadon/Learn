<script>
	export let name;
	console.log(22)



</script>

<div class="container">
	<div class="row">
		<form class="card" id="loginForm">
			<div class="card-content">
				<div style="background: red; color: #fff; padding: 1em; display: none; margin-bottom: 30px;" id="fail">
					Неправильный логин или пароль
				</div>

				<div class="input-field">
					<input id="login" name="login" type="text" class="validate">
					<label for="login">Логин</label>
				</div>
				<div class="input-field">
					<input id="password" name="password" type="password" class="validate">
					<label for="password">Пароль</label>
				</div>
				<button class="waves-effect waves-light btn" type="submit" disabled>Войти</button>
			</div>
		</form>

	</div>
</div>


