# Magic Mirror Module: MMM-MetroClock

This is a custom module for the Magic Mirror platform that displays the current time and date in a sleek and modern metro-style design.

## Installation

1. Clone this repository into your Magic Mirror `modules` directory:
    ```
    git clone https://github.com/brentpabst/MMM-MetroClock.git
    ```

2. Install the required dependencies by navigating to the module's directory and running:
    ```
    npm install
    ```

3. Add the module to your Magic Mirror configuration file (`config/config.js`):
    ```javascript
    modules: [
      {
         module: 'MMM-MetroClock',
         position: 'top_right',
         config: {
            // Add your configuration options here
         }
      }
    ]
    ```

4. Restart your Magic Mirror application.

## Configuration Options

The MMM-MetroClock module supports the following configuration options:

| Option        | Description           | Default Value  |
| ------------- |-----------------------| -------------- |
| `option1`     | Description of option1| `default value`|
| `option2`     | Description of option2| `default value`|
| `option3`     | Description of option3| `default value`|

For more detailed information on how to configure this module, please refer to the [module's documentation](https://github.com/brentpabst/MMM-MetroClock).

## License

This module is licensed under the MIT License. See the [LICENSE](https://github.com/brentpabst/MMM-MetroClock/blob/main/LICENSE) file for more information.
