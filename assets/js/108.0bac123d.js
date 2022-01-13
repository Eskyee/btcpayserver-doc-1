(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{760:function(e,a,t){"use strict";t.r(a);var s=t(32),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"how-to-verify-release-signatures"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-verify-release-signatures"}},[e._v("#")]),e._v(" How to verify release signatures")]),e._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("Downloading binaries from the internet might be dangerous. When you download a release of BTCPayServer Vault on our "),t("a",{attrs:{href:"https://github.com/btcpayserver/BTCPayServer.Vault/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub releases page"),t("OutboundLink")],1),e._v(", you only ensure that the uploader had access to our GitHub repository.")]),e._v(" "),t("p",[e._v("This might be fine, but sometimes you download the same binaries from a different source, or you want additional assurance that those binaries are signed by the developers of the project. (In this case, Nicolas Dorier)")]),e._v(" "),t("p",[e._v("If you do not care about who signed the executable and verifying the integrity of the files you downloaded, you don't have to read this document.")]),e._v(" "),t("h2",{attrs:{id:"checking-pgp-signatures"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#checking-pgp-signatures"}},[e._v("#")]),e._v(" Checking PGP signatures"),t("a",{attrs:{name:"pgp"}})]),e._v(" "),t("p",[e._v("For this you need the "),t("code",[e._v("gpg")]),e._v(" tool, make sure it is installed on your machine.")]),e._v(" "),t("p",[e._v("On the "),t("a",{attrs:{href:"https://github.com/btcpayserver/BTCPayServer.Vault/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[e._v("release page"),t("OutboundLink")],1),e._v(", download:")]),e._v(" "),t("ol",[t("li",[e._v("The release binary of your choice.")]),e._v(" "),t("li",[e._v("The "),t("code",[e._v("SHA256SUMS.asc")]),e._v(" file")])]),e._v(" "),t("h3",{attrs:{id:"importing-nicolas-dorier-pgp-keys-only-first-time"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#importing-nicolas-dorier-pgp-keys-only-first-time"}},[e._v("#")]),e._v(" Importing Nicolas Dorier pgp keys (only first time)")]),e._v(" "),t("p",[e._v("This step should be done only one time. It ensures your system knows Nicolas Dorier's PGP keys.")]),e._v(" "),t("p",[e._v("Nicolas Dorier has a "),t("a",{attrs:{href:"https://keybase.io/NicolasDorier",target:"_blank",rel:"noopener noreferrer"}},[e._v("keybase"),t("OutboundLink")],1),e._v(" account that allow you to verify that his identity is linked to several well-known social media accounts.\nAnd as you can see on his profile page, the PGP key "),t("code",[e._v("62FE 8564 7DED DA2E")]),e._v(" is linked to his keybase identity.")]),e._v(" "),t("p",[e._v("You can import this key from keybase:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" https://keybase.io/nicolasdorier/pgp_keys.asc "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" gpg --import\n")])])]),t("p",[e._v("or")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("keybase pgp pull nicolasdorier\n")])])]),t("p",[e._v("Alternatively, you can just download the file via the browser and run:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("gpg --import pgp_keys.asc\n")])])]),t("p",[e._v("This step won't have to be repeated the next time you need to check a signature.")]),e._v(" "),t("h3",{attrs:{id:"checking-the-actual-pgp-signature"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#checking-the-actual-pgp-signature"}},[e._v("#")]),e._v(" Checking the actual PGP signature")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("sha256sum --check SHA256SUMS.asc --ignore-missing\n")])])]),t("p",[e._v("You should see that the file you downloaded has the right hash:")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("BTCPayServerVault-1.0.7-setup.exe: OK\n")])])]),t("p",[e._v("If you are on Windows you can check the hashes are identical manually:")]),e._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[e._v("certUtil "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("hashfile BTCPayServerVault"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("7"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("setup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exe SHA256\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("type")]),e._v(" SHA256SUMS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("asc\n")])])]),t("p",[e._v("If you are on macOS:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("shasum -a "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("256")]),e._v(" --check SHA256SUMS.asc\n")])])]),t("p",[e._v("You should see that the file you downloaded has the right hash:")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("BTCPayServerVault-osx-x64-1.0.7.dmg: OK\n")])])]),t("p",[e._v("Then check the actual signature:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("gpg --verify SHA256SUMS.asc\n")])])]),t("p",[e._v("Which should output something like:")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('gpg: Signature made Thu Dec  5 20:40:47 2019 JST\ngpg:                using RSA key 62FE85647DEDDA2E\ngpg: Good signature from "BTCPayServer Vault &lt;nicolas.dorier@gmail.com>" [unknown]\ngpg: WARNING: This key is not certified with a trusted signature!\ngpg:          There is no indication that the signature belongs to the owner.\nPrimary key fingerprint: 7121 BDE3 555D 9BE0 6BDD  C681 62FE 8564 7DED DA2E\n')])])])])}),[],!1,null,null,null);a.default=r.exports}}]);