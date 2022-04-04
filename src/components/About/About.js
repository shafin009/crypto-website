import React from 'react'

const About = () => {
  return (
    <section class='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
      <div class='grid grid-cols-1 gap-24 md:grid-cols-2'>
        <div>
          <h1 class='mb-6 text-2xl font-light text-gray-900 md:text-3xl'>
            Basic Questions
          </h1>
          <p class='mt-10 mb-3 font-semibold text-gray-900'>
            What are cryptocurrencies?
          </p>
          <p class='text-gray-600'>
            This is a seemingly simple question, but since most people answer about what they think, hope, or want cryptocurrencies to be, it is a confusing one. Cryptocurrencies are a digital asset that started as a medium of exchange for people to buy goods and services. Over time, their functionality has expanded.
          </p>
          <p class='mt-10 mb-3 font-semibold text-gray-900'>
            Beyond a method for payment, what are other functions of cryptocurrencies?
          </p>
          <p class='text-gray-600'>
            Cryptocurrency value can be pegged to underlying asset such as U.S. dollar, central bank digital currencies, privacy coins (senders and receivers are anonymous), governance tokens (gives owners the right to vote in decisions regarding blockchain’s future development), utility tokens, and non-fungible tokens (distinct characteristics from all others). This is from a developer/development side. Of course, there are also investors and speculators who are hoping for appreciation. It is very important you know the intent and functionality of cryptocurrency you own or are considering owning.
          </p>
          <p class='mt-10 mb-3 font-semibold text-gray-900'>
            How are cryptocurrency transactions recorded?
          </p>
          <p class='text-gray-600'>
            Cryptocurrency transactions are recorded on a shared, digital ledger called a blockchain. This is decentralized technology, spread across many computers, that records every transaction.
          </p>
        </div>
        <div>
          <h1 class='mb-6 text-2xl font-light md:text-3xl'>
            Advanced Questions
          </h1>
          <p class='mt-10 mb-3 font-semibold text-gray-900'>
            Why are there so many cryptocurrencies?
          </p>
          <p class='text-gray-600'>
            People saw the success of Bitcoin and tried to improve existing functionality and provide new functionality with new cryptocurrencies. Additionally, investors and developers were certainly trying to make money.
          </p>
          <p class='mt-10 mb-3 font-semibold text-gray-900'>
            What is a crypto wallet?
          </p>
          <p class='text-gray-600'>
            Simply put, crypto wallets are places to store digital assets more securely than just on an exchange.  You hold your wallet via an exchange account, custody wallet, or outside of the exchange. You can establish an online or “hot” wallet that is internet connected—to your desktop, table or mobile phone. There is also the option to store on a device that is not connected to the internet (“cold” wallet). Cold wallets are the most secure way to store your cryptocurrency, but they are meant for longer-term holdings as they are not connected to the internet. With cold storage, you must remember your private keys (identifier number for your cryptocurrency).
          </p>
          <p class='mt-10 mb-3 font-semibold text-gray-900'>
            Can I be hacked?  What if I am hacked?
          </p>
          <p class='text-gray-600'>
            Unfortunately, there is a history of exchanges and online wallets being hacked. This is one of key reasons to thoroughly research where you trade cryptocurrency and securely store your digital assets.  If you are hacked, there is not FDIC insurance or anything similar. If you have a large position, you can purchase individual crypto insurance. Additionally, many exchanges finance their own insurance plans in the event of a hack. The insurance coverage is generally capped and not guaranteed, so there is still a risk of loss.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
