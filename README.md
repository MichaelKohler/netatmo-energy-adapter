# Netatmo Energy Adapter

Netatmo Energy adapter for the [Mozilla IoT gateway](https://iot.mozilla.org).

Bridges the Netatmo Cloud REST API to the gateway so it can read data from Netatmo Energy devices.

## Setup
1. Set up your Netatmo thermostats using the official Netatmo app.
2. [Create a Netatmo app](https://dev.netatmo.com/myaccount/createanapp). After entering and saving information for the new app, copy the API Client ID and Client Secret.
3. Enter the credentials that you have collected in the last steps in the Netatmo Energy add-on configuration (Settings → Add-ons → Netatmo Energy → [Configure](http://gateway.local/settings/addons/config/netatmo-energy-adapter)).
4. You should now see all the Netatmo thermostats connected to the configured credentials in the device pairing screen.

## Limitations

Currently this add-on only supports the Smart Thermostat Valves.

## Inspiration

This add-on has been heavily inspired by [Netatmo Weather Station add-on](https://github.com/tim-hellhake/netatmo-weather-adapter). In the future we might want to integrate this add-on into the Weather Station add-on and rename it.
