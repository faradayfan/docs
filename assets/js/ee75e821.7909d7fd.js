"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[893],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,f=u["".concat(s,".").concat(h)]||u[h]||p[h]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6193:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],l={title:"Networking",weight:35},s=void 0,c={unversionedId:"networking/networking",id:"networking/networking",title:"Networking",description:"This page explains how CoreDNS, the Traefik Ingress controller, and Klipper service load balancer work within K3s.",source:"@site/docs/networking/networking.md",sourceDirName:"networking",slug:"/networking/",permalink:"/networking/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/networking/networking.md",tags:[],version:"current",lastUpdatedAt:1672768865,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{title:"Networking",weight:35},sidebar:"mySidebar",previous:{title:"Volumes and Storage",permalink:"/storage/"},next:{title:"Helm",permalink:"/helm/"}},d={},p=[{value:"CoreDNS",id:"coredns",level:2},{value:"Traefik Ingress Controller",id:"traefik-ingress-controller",level:2},{value:"Service Load Balancer",id:"service-load-balancer",level:2},{value:"How the Service LB Works",id:"how-the-service-lb-works",level:3},{value:"Usage",id:"usage",level:3},{value:"Controlling ServiceLB Node Selection",id:"controlling-servicelb-node-selection",level:3},{value:"Disabling the Service LB",id:"disabling-the-service-lb",level:3},{value:"Nodes Without a Hostname",id:"nodes-without-a-hostname",level:2}],u={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page explains how CoreDNS, the Traefik Ingress controller, and Klipper service load balancer work within K3s."),(0,a.kt)("p",null,"Refer to the ",(0,a.kt)("a",{parentName:"p",href:"/installation/network-options"},"Installation Network Options")," page for details on Flannel configuration options and backend selection, or how to set up your own CNI."),(0,a.kt)("p",null,"For information on which ports need to be opened for K3s, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/installation/requirements#networking"},"Networking Requirements"),"."),(0,a.kt)("h2",{id:"coredns"},"CoreDNS"),(0,a.kt)("p",null,"CoreDNS is deployed automatically on server startup. To disable it, configure all servers in the cluster with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--disable=coredns")," option."),(0,a.kt)("p",null,"If you don't install CoreDNS, you will need to install a cluster DNS provider yourself."),(0,a.kt)("h2",{id:"traefik-ingress-controller"},"Traefik Ingress Controller"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://traefik.io/"},"Traefik")," is a modern HTTP reverse proxy and load balancer made to deploy microservices with ease. It simplifies networking complexity while designing, deploying, and running applications."),(0,a.kt)("p",null,"Traefik is deployed by default when starting the server. For more information see ",(0,a.kt)("a",{parentName:"p",href:"/advanced/#auto-deploying-manifests"},"Auto Deploying Manifests"),". The default config file is found in ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/manifests/traefik.yaml"),"."),(0,a.kt)("p",null,"The Traefik ingress controller will use ports 80 and 443 on the host (i.e. these will not be usable for HostPort or NodePort)."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"traefik.yaml")," file should not be edited manually, because k3s would overwrite it again once it is restarted. Instead you can customize Traefik by creating an additional ",(0,a.kt)("inlineCode",{parentName:"p"},"HelmChartConfig")," manifest in ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/manifests"),". For more details and an example see ",(0,a.kt)("a",{parentName:"p",href:"/helm/#customizing-packaged-components-with-helmchartconfig"},"Customizing Packaged Components with HelmChartConfig"),". For more information on the possible configuration values, refer to the official ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/traefik/traefik-helm-chart/tree/master/traefik"},"Traefik Helm Configuration Parameters."),"."),(0,a.kt)("p",null,"To disable it, start each server with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--disable traefik")," option."),(0,a.kt)("p",null,"If Traefik is not disabled K3s versions 1.20 and earlier will install Traefik v1, while K3s versions 1.21 and later will install Traefik v2 if v1 is not already present."),(0,a.kt)("p",null,"To migrate from an older Traefik v1 instance please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://doc.traefik.io/traefik/migration/v1-to-v2/"},"Traefik documentation")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/traefik/traefik-migration-tool"},"migration tool"),"."),(0,a.kt)("h2",{id:"service-load-balancer"},"Service Load Balancer"),(0,a.kt)("p",null,"Any service load balancer (LB) can be used in your K3s cluster. By default, K3s provides a load balancer known as ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/klipper-lb"},"ServiceLB")," (formerly Klipper Load Balancer) that uses available host ports."),(0,a.kt)("p",null,"Upstream Kubernetes allows Services of type LoadBalancer to be created, but doesn't include a default load balancer implementation, so these services will remain ",(0,a.kt)("inlineCode",{parentName:"p"},"pending")," until one is installed. Many hosted services require a cloud provider such as Amazon EC2 or Microsoft Azure to offer an external load balancer implementation. By contrast, the K3s ServiceLB makes it possible to use LoadBalancer Services without a cloud provider or any additional configuration."),(0,a.kt)("h3",{id:"how-the-service-lb-works"},"How the Service LB Works"),(0,a.kt)("p",null,"The ServiceLB controller watches Kubernetes ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"Services")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.type")," field set to ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),"."),(0,a.kt)("p",null,"For each LoadBalancer Service, a ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"},"DaemonSet")," is created in the ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace. This DaemonSet in turn creates Pods with a ",(0,a.kt)("inlineCode",{parentName:"p"},"svc-")," prefix, on each node. These Pods use iptables to forward traffic from the Pod's NodePort, to the Service's ClusterIP address and port."),(0,a.kt)("p",null,"If the ServiceLB Pod runs on a node that has an external IP configured, the node's external IP is populated into the Service's ",(0,a.kt)("inlineCode",{parentName:"p"},"status.loadBalancer.ingress")," address list. Otherwise, the node's internal IP is used."),(0,a.kt)("p",null,"If multiple LoadBalancer Services are created, a separate DaemonSet is created for each Service."),(0,a.kt)("p",null,"It is possible to expose multiple Services on the same node, as long as they use different ports."),(0,a.kt)("p",null,"If you try to create a LoadBalancer Service that listens on port 80, the ServiceLB will try to find a free host in the cluster for port 80. If no host with that port is available, the LB will remain Pending."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Create a ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer"},"Service of type LoadBalancer")," in K3s."),(0,a.kt)("h3",{id:"controlling-servicelb-node-selection"},"Controlling ServiceLB Node Selection"),(0,a.kt)("p",null,"To exclude nodes from being used by ServiceLB, add the following label to the nodes that should host ServiceLB Pods. All unlabeled nodes will not be used for ServiceLB."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"svccontroller.k3s.cattle.io/enablelb\n")),(0,a.kt)("p",null,"To select a particular subset of nodes to host pods for a LoadBalancer, set matching annotation values on the Nodes and Service. For example:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Label Node A and Node B with ",(0,a.kt)("inlineCode",{parentName:"li"},"svccontroller.k3s.cattle.io/lbpool=pool1")),(0,a.kt)("li",{parentName:"ol"},"Label Node C and Node D with ",(0,a.kt)("inlineCode",{parentName:"li"},"svccontroller.k3s.cattle.io/lbpool=pool2")),(0,a.kt)("li",{parentName:"ol"},"Create one LoadBalancer Service on port 443 with label ",(0,a.kt)("inlineCode",{parentName:"li"},"svccontroller.k3s.cattle.io/lbpool=pool1"),". The DaemonSet for this service only deploy Pods to Node A and Node B."),(0,a.kt)("li",{parentName:"ol"},"Create another LoadBalancer Service on port 443 with label ",(0,a.kt)("inlineCode",{parentName:"li"},"svccontroller.k3s.cattle.io/lbpool=pool2"),". The DaemonSet will only deploy Pods to Node C and Node D.")),(0,a.kt)("h3",{id:"disabling-the-service-lb"},"Disabling the Service LB"),(0,a.kt)("p",null,"To disable the embedded LB, configure all servers in the cluster with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--disable=servicelb")," option."),(0,a.kt)("p",null,"This is necessary if you wish to run a different LB, such as MetalLB."),(0,a.kt)("h2",{id:"nodes-without-a-hostname"},"Nodes Without a Hostname"),(0,a.kt)("p",null,'Some cloud providers, such as Linode, will create machines with "localhost" as the hostname and others may not have a hostname set at all. This can cause problems with domain name resolution. You can run K3s with the ',(0,a.kt)("inlineCode",{parentName:"p"},"--node-name")," flag or ",(0,a.kt)("inlineCode",{parentName:"p"},"K3S_NODE_NAME")," environment variable and this will pass the node name to resolve this issue."))}h.isMDXComponent=!0}}]);