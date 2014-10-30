{
  "attach": [], // default=[] Attach to STDIN, STDOUT or STDERR.
  "addHost": [], //  default=[] Add a custom host-to-IP mapping (host:ip)
  "cpuShares": 0, //  default=0 CPU shares (relative weight)
  "capAdd": [], //  default=[] Add Linux capabilities
  "capDrop": [], //  default=[] Drop Linux capabilities
  "cidfile": "", //  default="" Write the container ID to the file
  "cpuset": "", //  default="" CPUs in which to allow execution (0-3, 0,1)
  "detach": false, //  default=false Detached mode: run the container in the background and print the new container ID
  "device": [], //  default=[] Add a host device to the container (e.g. --device=/dev/sdc:/dev/xvdc:rwm)
  "dns": [], //  default=[] Set custom DNS servers
  "dnsSearch": [], //  default=[] Set custom DNS search domains
  "env": [], //  default=[] Set environment variables
  "entrypoint": "", //  default="" Overwrite the default ENTRYPOINT of the image
  "envFile": [], //  default=[] Read in a line delimited file of environment variables
  "expose": [], //  default=[] Expose a port from the container without publishing it to your host
  "hostname": "", //  default="" Container host name
  "interactive": false, //  default=false Keep STDIN open even if not attached
  "link": [], //  default=[] Add link to another container in the form of name:alias
  "lxcConf": [], //  default=[] (lxc exec-driver only) Add custom lxc options --lxc-conf="lxc.cgroup.cpuset.cpus = 0,1"
  "memory": "", //  default="" Memory limit (format: <number><optional unit>, where unit = b, k, m or g)
  "name": "", //  default="" Assign a name to the container
  "net": "", //  default="bridge" Set the Network mode for the container
  "publishAll": false, //  default=false Publish all exposed ports to the host interfaces
  "publish": [], //  default=[] Publish a container's port to the host
  "privileged": false, //  default=false Give extended privileges to this container
  "restart": "", //  default="" Restart policy to apply when a container exits (no, on-failure[:max-retry], always)
  "rm": false, //  default=false Automatically remove the container when it exits (incompatible with -d)
  "sigProxy": true, //  default=true Proxy received signals to the process (even in non-TTY mode). SIGCHLD, SIGSTOP, and SIGKILL are not proxied.
  "tty": false, //  default=false Allocate a pseudo-TTY
  "user": "", //  default="" Username or UID
  "volume": [], //  default=[] Bind mount a volume (e.g., from the host: -v /host:/container, from Docker: -v /container)
  "volumesFrom": [], //  default=[] Mount volumes from the specified container(s)
  "workdir": "" //  default="" Working directory inside the container
}
