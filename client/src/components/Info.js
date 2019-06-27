import React from 'react';
import '../styles/Info.css';

function Info() {
    return (
        <div>
            <p className="notes">How do I read this chart?</p>
            <table className="forecast info-table">
                <thead>
                </thead>
                <tbody>
                    <tr>
                        <td className="peak center-text">PEAK</td>
                        <td className="description">Top 10%. Conditions are amazing!</td>
                    </tr>
                    <tr>
                        <td className="good center-text">good</td>
                        <td className="description">Top 10%-30%. Should still be enjoyable.</td>
                    </tr>
                    <tr>
                        <td className="poor center-text">poor</td>
                        <td className="description">Top 30%-50%. You may want to reschedule.</td>
                    </tr>
                    <tr>
                        <td className="bad center-text">BAD</td>
                        <td className="description">Bottom 50%. Don't even bother</td>
                    </tr>

                </tbody>
            </table>

            <div id="defs">
                <p className="definition">
                    <strong className="term">
                        Lunar Phase
                    </strong>: The Lunar phase is how visible the Moon is as viewed from Earth. The best time to go stargazing is during the New Moon. 
                </p>
                <p className="definition">
                    <strong className="term">
                        Visibility
                    </strong>
                    : Average visibility in 10 miles.
                </p>
                <p className="definition">
                    <strong className="term">
                        Cloud Cover
                    </strong>
                    : Percentage of sky occluded by clouds. 
                </p>
            </div>
        </div>

    );
}

export default Info;
