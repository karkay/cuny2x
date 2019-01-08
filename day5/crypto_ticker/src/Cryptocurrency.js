import React, { Component } from 'react';
    import './Cryptocurrency.css';

    class Cryptocurrency extends Component {

        render() {
            var {
                id,
                name,
                symbol,
                price_usd,
                percent_change_1h,
                percent_change_24h,
                percent_change_7d,
                last_updated,
            } = this.props.data;

            var date = new Date(last_updated*1000);
            var hours = ((date.getHours() > 10) ? date.getHours() : ("0" + date.getHours()) );
            var minutes = ((date.getMinutes() > 10) ? date.getMinutes() : ("0" + date.getMinutes()) );
            var seconds = ((date.getSeconds() > 10) ? date.getSeconds() : ("0" + date.getSeconds()) );

            var formattedTime = hours + ':' + minutes + ':' + seconds;
            return (
                <li className={"cryptocurrency " + id}>
                    <p className="cryptocurrency-name">{name} ({symbol})</p>
                    <h1>${ (+price_usd).toFixed(2) }</h1>
                    <p>{percent_change_1h}% 1hr</p>
                    <p>{percent_change_24h}% 24hrs</p>
                    <p>{percent_change_7d}% 7days</p>
                    <p>{formattedTime}</p>
                </li>
            );
        }
    }

    export default Cryptocurrency;