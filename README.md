# HandTalk Challenge

## Descrição

Este é um projeto desenvolvido como parte do **HandTalk Challenge**. O aplicativo permite que os usuários façam login, configurem objetos 3D interativos e personalizem suas características, como forma, cor, tamanho e rotação. Além disso, as configurações dos usuários são salvas no Firebase Realtime Database para persistência dos dados.

## Estrutura do Projeto

```
── src
│   ├── modules
│   │   ├── authentication
│   │   │   ├── context
│   │   │   ├── hooks
│   │   │   ├── models
│   │   │   ├── navigation
│   │   │   ├── screens
│   │   │   └── services
│   │   ├── main
│   │   │   ├── navigation
│   │   │   └── screens
│   │   ├── navigation
│   │   └── threeD
│   │       ├── components
│   │       │   ├── 3d
│   │       │   ├── CanvasWrapper.tsx
│   │       │   ├── RGBColorPicker.tsx
│   │       │   ├── RotationSliderGroup.tsx
│   │       │   ├── SettingsScreen.tsx
│   │       │   └── ShapeSelector.tsx
│   │       ├── context
│   │       ├── controllers
│   │       ├── models
│   │       ├── services
│   │       └── useCases
│   ├── services
│   ├── @types
│   └── utils
│       └── i18n
│
├── _tests_
│   └── src
│       └── modules
│           ├── authentication
│           ├── threeD
│           └── components
```

## Tecnologias Utilizadas

- **React Native (Expo)**
- **TypeScript**
- **Firebase Authentication**
- **Firebase Realtime Database**
- **Three.js (@react-three/fiber)**
- **Jest (Testes Unitários)**
- **React Navigation (Navegação)**
- **@react-native-community/slider (Controles de cor e rotação)**

## Funcionalidades

- **Autenticação:** Login e Logout com Firebase Authentication.
- **Personalização de Formas 3D:** Escolha de forma, cor, rotação e tamanho.
- **Persistência de Dados:** Salvamento automático das configurações do usuário no Firebase.
- **Acessibilidade:** Suporte ao TalkBack/VoiceOver.
- **Experiência Tátil:** Feedback por vibração ao ajustar configurações.
- **Navegação:** Alternância entre telas de visualização e configurações.

## Instalação e Execução

1. Clone o repositório:
   ```sh
   git clone https://github.com/narradorww/handtalk-challenge.git
   cd handtalk-challenge
   ```
2. Instale as dependências:
   ```sh
   yarn install
   ```
3. Configure as credenciais do Firebase:
   - Crie um projeto no Firebase e habilite **Authentication** e **Realtime Database**.
   - Substitua as configurações do arquivo `firebaseConfig.ts` com suas credenciais do Firebase.
4. Execute o projeto:
   ```sh
   expo start
   ```

## Testes Automatizados

Para rodar os testes unitários:

```sh
yarn test
```

## Estrutura de Navegação

O aplicativo utiliza **React Navigation** para gerenciar a navegação entre as telas:

- **TabNavigator.tsx** → Gerencia a navegação entre `MainScreen` e `SettingsScreen`.
- **AuthNavigator.tsx** → Gerencia o fluxo de autenticação.
- **RootNavigator.tsx** → Decide entre mostrar `AuthNavigator` ou `TabNavigator` com base no estado do usuário.

## Licença

## Este projeto foi desenvolvido exclusivamente para o desafio da **HandTalk** e não possui licença aberta para redistribuição.

**Desenvolvido por:** [narradorww](https://github.com/narradorww)
