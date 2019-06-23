import React from 'react';
import '../styles/Info.css';

function Info() {
    return (
        <div>
            <p className="notes">How do I read this chart?</p>
            <table className="info-table forecast">
                <thead>
                    <tr className="style">
                        <th>Style</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="peak center-text">PEAK</td>
                        <td className="description">Top 10%. Conditions are really good, go Stargazing.</td>
                    </tr>
                    <tr>
                        <td className="good center-text">good</td>
                        <td className="description">Top 20%-30%. Conditions are okay I guess.</td>
                    </tr>
 <tr>
                        <td className="poor center-text">poor</td>
                        <td className="description">Top 30%-50%. Conditions are kinda bad, you may want to reschedule.</td>
                    </tr>
 <tr>
                        <td className="bad center-text">BAD</td>
                        <td className="description">Bottom 50%. Don't even bother</td>
                    </tr>

                </tbody>
            </table>
            <p className="notes">A good way to think about it is like your GPA. Anything below a 90% is garbage. The best time to go is when all conditions are in PEAK.</p>

            <p className="definition"><strong>Moon Phase</strong>: You want to go when there isn't a moon out</p>
            <p className="definition"><strong>Visibility</strong>: Average visibility in 10 miles</p>
            <p className="definition"><strong>Cloud Cover</strong>: Percentage of the cloud covered by sky</p>
        </div>

    );
}

export default Info;
