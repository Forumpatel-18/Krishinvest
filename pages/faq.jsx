import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const faq = () => {
  return <>
  <div className="container">
      <div className="row">
        <div className="col acc-side">
            <h1>How can we help you?</h1>
            <h3>Search a question</h3>
            <div style={{ width: 500 }} >
            <form className="form-inline">

                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
            </form>                
            </div>
        </div>
        <div className="col">
        <div style={{ height: 500, width: 500 }} className="Accordion">
    <Accordion className="acc-item">
    <Accordion.Item eventKey="0">
        <Accordion.Header className="acc-title">What types of investments will I see on FarmTogether? </Accordion.Header>
        <Accordion.Body className="acc-body">
        FarmTogether features direct investments in farmland. We typically target permanent crops in California and the Pacific Northwest (e.g. tree nuts, citrus), focusing on locations with the strong water availability, high-grade soils, and within the networks of our preferred operators. 
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
        <Accordion.Header>Do I need to be involved in any aspect of property management?</Accordion.Header>
        <Accordion.Body>
        This is a fully managed investment that requires no involvement on your part. FarmTogether Management, LLC a 100% owned FarmTogether Inc. company, manages the investment properties on your behalf.        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="3">
        <Accordion.Header>Who can invest through FarmTogether?</Accordion.Header>
        <Accordion.Body>
        FarmTogether serves accredited investors worldwide. To qualify, you must meet the SEC's Accredited Investor definitions:
Earn an annual income of over $200,000 per year for the last two years ($300,000 per household) with the expectation of maintaining such level of income this current year.
Have a net worth of greater than $1 million (individually or jointly), excluding the value of a primary residence.
Invest as a bank, an insurance company, registered investment advisor, business development company, or small business investment company.
Invest as a business in which all the equity owners are accredited investors.
Invest as an employee benefit plan, a trust, charitable organization, partnership, or company with total assets over $5 million.        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="4">
        <Accordion.Header>Are investments on FarmTogether risky?</Accordion.Header>
        <Accordion.Body>
        Like all forms of investing, farmland entails risk. As an investor, you must be prepared for the potential loss of all of your investment. Please review the risks under the associated disclosure documents. 
        If the potential loss will render you unable to survive financially, or you are unwilling to accept the potential loss of capital you have invested, we do not recommend you invest with us, or anyone else. With that fact established, we understand the value of total due diligence, deep underwriting of potential investments, and other basics that control our risk. We are committed to offering only investments that meet our stringent criteria.
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="5">
        <Accordion.Header>What are the risks and how are they mitigated?</Accordion.Header>
        <Accordion.Body>
        The most common risks are overpaying for land or selecting the wrong operator-partners. We mitigate these risks by being conservative in our underwriting and partnering with highly experienced farmers and farmland investment managers. At the same time, the allocation of substantial amounts of capital for investment in farmland and farming-related properties or significant competition for income-producing real estate may inflate the purchase prices for such assets. 
        If we were to acquire properties in an inflated environment, it is possible that the value of the properties may decrease in value, perhaps significantly, to below the amount we paid. Other unforeseen factors, like extreme weather changes, government regulation and policy shifts or consumer demand shifts, could impede our ability to resell the property at a profit. See below for additional information on further risks.
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="6">
        <Accordion.Header>Market Liquidity?</Accordion.Header>
        <Accordion.Body>
        Farmland is a buy and hold proposition where the liquidity is tied to the sale of an asset. The investments may be difficult to sell quickly. As a result, our ability to promptly sell properties in response to changing economic, financial, and investment conditions may be limited. Return of capital and realization of gains, if any, from an investment generally will occur upon disposition or refinancing of the underlying property. FarmTogether may be unable to realize investment objectives by sale, other disposition or refinancing at attractive prices within any given period of time or may otherwise be unable to complete any exit strategy.
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="7">
        <Accordion.Header>What happens to my investment if FarmTogether goes out of business?</Accordion.Header>
        <Accordion.Body>Each investment is a unit in a separate Delaware LLC that owns the title to the land.. All investors retain their legal ownership in this LLC independent of FarmTogether. In the event of our bankruptcy, we will aim to secure an external manager to continue to operate the LLCs per the existing agreements.
        </Accordion.Body>
    </Accordion.Item>
    </Accordion>

    </div>
        </div>

      </div>
  </div>


  </>;
};

export default faq;
