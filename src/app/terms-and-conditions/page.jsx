import Link from "next/link"

const TermsAndConditions = () => {
  return (
    <div className='pt-36 pb-16 px-8 md:px-36 bg-white dark:bg-black text-black dark:text-white font-regular'>
            
      {/* Terms and Conditions */}
      <div className=''>
        <h1 className='text-2xl md:text-4xl font-heading text-center mb-8'>Terms and Conditions for DineIntel</h1>
        <br></br>
        <h2 className="font-bold text-xl">Introduction</h2>
        <p>Welcome to DineIntel! These Terms and Conditions outline the rules and regulations for the use of DineIntel&apos;s Application, available through various mobile platforms and our website.</p>
        <p>By accessing DineIntel, you agree to be bound by these terms and conditions. If you disagree with any part of the terms, then you do not have permission to access the service.</p>
        <br></br>
        <h2 className="font-bold text-xl">Intellectual Property Rights</h2>
        <p>Other than the content you own, under these Terms, DineIntel and/or its licensors own all the intellectual property rights and materials contained in this Application. You are granted a limited license only for viewing the material contained on this Application.</p>
        <br></br>
        <h2 className="font-bold text-xl">Restrictions</h2>
        <p>You are specifically restricted from all of the following:</p>
        <ul className="list-disc list-inside">
          <li>Publishing any Application material in any other media.</li>
          <li>Selling, sublicensing, and/or otherwise commercializing any Application material.</li>
          <li>Publicly performing and/or showing any Application material.</li>
          <li>Using this Application in any way that is damaging, or that could be damaging to DineIntel or any person or business entity.</li>
          <li>Engaging in any data mining, data harvesting, data extracting, or any other similar activity in relation to this Application.</li>
          <li>Using this Application in any way that interferes with user access to this Application.</li>
        </ul>
        <br></br>
        <h2 className="font-bold text-xl">Use of Dine Groups</h2>
        <p>DineIntel offers Dine Group features to enhance user interaction. Users are expected to use the Dine Groups for their intended purposes and adhere to the following guidelines:</p>
        <ul className="list-disc list-inside">
          <li>Users can create groups and others can join or request to join these groups.</li>
          <li>Group admins agree to be responsible for moderating the group, ensuring compliance with these rules and regulations.</li>
          <li>Members must comply with the rules and report any violations. Maintaining a positive community is a collective effort.</li>
          <li>Do not post or share nude, sexually explicit, or violent content.</li>
          <li>Do not engage in slander, hate speech, harassment, or any form of abuse towards other users.</li>
          <li>Do not share false information or engage in activities that could mislead other users.</li>
        </ul>
        <br></br>
        <p>Violations of these guidelines may result in temporary or permanent suspension of access to Dine Groups and/or the DineIntel app.</p>
        <br></br>
        <h2 className="font-bold text-xl">Age Requirement</h2>
        <p>DineIntel is intended for individuals who are at least 18 years of age. By using this Application, you warrant that you are at least 18 years old.</p>
        <br></br>
        <h2 className="font-bold text-xl">Compliance with Children's Privacy</h2>
        <p>DineIntel does not knowingly collect any Personal Identifiable Information from individuals under the age of 18. If you believe we have collected such information, please contact us at info@dineintel.io.</p>
        <br></br>
        <h2 className="font-bold text-xl">No Warranties</h2>
        <p>This Application is provided "as is," with all faults, and DineIntel makes no express or implied representations or warranties.</p>
        <br></br>
        <h2 className="font-bold text-xl">Limitation of Liability</h2>
        <p>In no event shall DineIntel, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Application.</p>
        <br></br>
        <h2 className="font-bold text-xl">Indemnification</h2>
        <p>You hereby indemnify DineIntel against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these Terms.</p>
        <br></br>
        <h2 className="font-bold text-xl">Severability</h2>
        <p>If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.</p>
        <br></br>
        <h2 className="font-bold text-xl">Variation of Terms</h2>
        <p>DineIntel is permitted to revise these Terms at any time, and by using this Application, you are expected to review these Terms on a regular basis.</p>
        <br></br>
        <h2 className="font-bold text-xl">Assignment</h2>
        <p>DineIntel is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.</p>
        <br></br>
        <h2 className="font-bold text-xl">Entire Agreement</h2>
        <p>These Terms constitute the entire agreement between DineIntel and you in relation to your use of this Application and supersede all prior agreements and understandings.</p>
        <br></br>
        <h2 className="font-bold text-xl">Governing Law & Jurisdiction</h2>
        <p>These Terms will be governed by and interpreted in accordance with the laws of the United States, and you submit to the non-exclusive jurisdiction of the state and federal courts located in the United States for the resolution of any disputes.</p>
        <br></br>
        <h2 className="font-bold text-xl">Subscription and Refund Policy</h2>
        <p>DineIntel is a subscription-based service. By subscribing, you agree to the following terms:</p>
        <ul className="list-disc list-inside">
          <li><span className="font-bold">Subscription Terms:</span> Your subscription will automatically renew at the end of each billing cycle unless you cancel it before the renewal date. You can manage your subscription settings within the app or website.</li>
          <li><span className="font-bold">Cancellation:</span> You may cancel your subscription at any time. Your subscription will remain active until the end of the current billing period, after which it will not be renewed.</li>
          <li><span className="font-bold">Refunds:</span> Refunds are not provided for any unused portion of the current subscription period. In case of a dispute or special circumstance, please contact our support team at <span className="font-bold">support@dineintel.io</span>.</li>
        </ul>
        <br></br>
        <h2 className="font-bold text-xl">Contact Us</h2>
        <p>For any questions or concerns regarding these Terms and Conditions, please contact us at <span className="font-bold">info@dineintel.io</span>.</p>
        <br></br>
      </div>
    </div>
  )
}

export default TermsAndConditions