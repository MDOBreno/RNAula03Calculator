# RNAula03Calculator
Terceira Aula de React Native 0.63.5(react 16.13.1), node v16.20.2, iOS 13{ 'Flipper' => '0.93.0', 'Flipper-Folly' => '2.6.7', 'Flipper-DoubleConversion' => '3.1.7' }, padronizado em Javascript e executado no Xcode 14.3.1 funcionando em simuladores tanto android quanto iOS

Criado com o comando:

$ npx react-native@0.63 init RNAula03Calculator --version 0.63

Em seguida fazer esses ajustes para poder rodar no iOS:

- Ajuste 1de3 para poder executar em iOS nos dias de hoje: definicao de versao mais recente ainda compativel do use_flipper
- Ajuste 2de3 para poder executar em iOS nos dias de hoje: Deletar podfile.lock e pasta Pods, em seguida executar pod install
- Ajuste 3de3 para poder executar em iOS nos dias de hoje: definicao de versao minima de iOS para 13 no podfile o no xcproject
- E abrir no Xcode para nogar com conta apple

Extra: 
1/2) Adicione a seguinte linha em [ package.json -> scripts ] para poder executar o app em um simulador especifico:

"launch-ios": "npm run ios -- --simulator=\"iPhone SE (3rd generation)\""

2/2) agora você pode executar sempre em um mesmo simulador apenas com o seguinte comando na raiz do projeto:

$ npm run launch-ios

