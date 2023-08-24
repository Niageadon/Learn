import pandas as pd
import numpy as np
import tensorflow as tf
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt

# загружаем данные из файла
data = pd.read_csv('data.csv', header=None)

# разделяем данные на признаки (X) и целевую переменную (y)
X = data.iloc[:, :-1].values
y = data.iloc[:, -1].values

# разбиваем данные на обучающий и тестовый наборы
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.1, random_state=42)

# создаем модель
model = tf.keras.Sequential([
  tf.keras.layers.Dense(64, activation='relu', input_shape=(4,)),
  tf.keras.layers.Dense(64, activation='relu'),
  tf.keras.layers.Dense(1)
])

# компилируем модель
model.compile(optimizer=tf.keras.optimizers.RMSprop(0.001),
              loss='mse',
              metrics=['mae'])

# обучаем модель
history = model.fit(X_train, y_train, epochs=10, batch_size=16,
                    validation_data=(X_test, y_test))

# выводим результаты обучения на график
print(history.history['val_mae']);
plt.plot(history.history['mae'], label='MAE (обучающий набор)')
plt.plot(history.history['val_mae'], label='MAE (тестовый набор)')
plt.xlabel('Эпоха')
plt.ylabel('Средняя абсолютная ошибка')
plt.legend(loc='best')
plt.title(f'Average test error:{model.evaluate(X_test, y_test)}')
plt.show()