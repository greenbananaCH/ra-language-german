# German Translations for react-admin

German translations for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST services.


## Installation

```sh
npm install --save ra-language-german
```

## Usage

```js
import germanMessages from 'ra-language-german';

const messages = {
    'de': germanMessages,
};
const i18nProvider = locale => messages[locale];

<Admin locale="de" i18nProvider={i18nProvider}>
  ...
</Admin>
```

## License

This translation is licensed under the [MIT Licence](LICENSE).
